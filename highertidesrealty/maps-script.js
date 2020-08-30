var output_lat = new Array(0);
var output_lng = new Array(0);
var output_f = new Array(0);
var output_m = new Array(0);
var outputDiv = document.getElementById('outputDiv');
var map;
var routeMarkers = new Array(0);
var geocoder;
var latlngbounds;
var addresslimit = 100;
var point;
var state;
var oceanStates = ["Alaska", "Florida", "California", "Hawaii", "Louisiana", "Texas", "North Carolina", "Oregon", "Maine", "Massachusetts", "South Carolina", "Washington", "New Jersey", "New York", "Virginia", "Georgia", "Connecticut", "Alabama", "Mississippi", "Rhode Island", "Maryland", "Delaware", "New Hampshire", "Michigan", "Wisconsin", "Ohio", "Minnesota", "Pennsylvania", "Illinois", "Indiana"];
var droughtStates = ["California", "Texas", "Arizona", "Nevada", "Oregon", "Utah", "Kansas", "Oklahoma", "Nebraska"];
var hurricaneStates = ["North Carolina", "South Carolina", "Georgia", "Virginia", "Florida", "Missouri", "Maryland", "Lousiana"];
var waterStates = ["Arkansas", "Texas", "Florida", "California", "Arizona", "Nevada", "Oklahoma", "Kansas", "Nebraska"];
var wildfireStates = ["California", "Oregon", "Nevada", "Arizona", "New Mexico", "Colorado", "Wyoming", "Idaho", "Montana"];

function initialize() {
    var latlng = new google.maps.LatLng(0, 0);
    var myOptions = {
        zoom: 1,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggableCursor: 'crosshair',
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: true
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    elevator = new google.maps.ElevationService();
    google.maps.event.addListener(map, 'click', mapclickedevent);
    geocoder = new google.maps.Geocoder();
    latlngbounds = new google.maps.LatLngBounds();
}

function foundsingle(first) {
    var latlng = new google.maps.LatLng(parseFloat(first.lat), parseFloat(first.lng));
    var obj = new Object();
    obj.latLng = latlng;
    getElevation(obj);
}

function mapclickedevent(event) {
    var clickedLocation = event.latLng;
    getElevation(clickedLocation);
}

function getElevation(clickedLocation) {
    var locations = [];
    locations.push(clickedLocation);
    var positionalRequest = {
        'locations': locations
    };
    elevator.getElevationForLocations(positionalRequest, function(results, status) {
        if (status == google.maps.ElevationStatus.OK) {
            if (results[0]) {

                var xhrIP = new XMLHttpRequest();
                xhrIP.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + point.k + "," + point.B + "&sensor=false", false);
                xhrIP.onreadystatechange = function() {
                    if (xhrIP.readyState === 4) {
                        var status = xhrIP.status;
                        if ((status >= 200 && status < 300) || status === 304) {
                            var location_data = JSON.parse(xhrIP.responseText);
                            //console.dir(location_data);
                            for (var i = 0; i < location_data.results[0].address_components.length; i++) {
                                if (location_data.results[0].address_components[i].types[0] === "administrative_area_level_1") {
                                    state = location_data.results[0].address_components[i].long_name;
                                    //console.log(state);
                                    break;
                                }

                            }

                        }
                    }
                };

                xhrIP.send();

                //console.log(state);
                if (results[0].elevation * 3.2808399 < 6.5) { //if it's below sea level
                    if (oceanStates.indexOf(state) > -1) {
                        outputDiv.innerHTML = "Your property's average elevation is " + (results[0].elevation * 3.2808399).toFixed(1) + " feet from sea level, which is unfortunately less than predicted sea level rises for the next century. Additionally, " + state + " is an ocean state, which could mean property values around you may change drastically. ";
                    } else {
                        outputDiv.innerHTML = "Your property's average elevation is " + (results[0].elevation * 3.2808399).toFixed(1) + " feet from sea level, which is unfortunately less than predicted sea level rises for the next century. However, " + state + " isn't an ocean state, so your property has a low risk of being damaged by the sea. ";
                    }
                } else if (oceanStates.indexOf(state) > -1) {
                    outputDiv.innerHTML = "Your property's average elevation is " + (results[0].elevation * 3.2808399).toFixed(1) + " feet from sea level, which is fortunately more than predicted sea level rises for the next century.  However, " + state + " is an ocean state, which could mean property values around you may change drastically. ";
                } else {
                    outputDiv.innerHTML = "Your property's average elevation is " + (results[0].elevation * 3.2808399).toFixed(1) + " feet from sea level, which is fortunately more than predicted sea level rises for the next century. " + state + " is also not an ocean state, so surrounding property should be less affected by rising sea levels and temperatures. ";
                }

                if (droughtStates.indexOf(state) > -1 || waterStates.indexOf(state) > -1 || wildfireStates.indexOf(state) > -1 || hurricaneStates.indexOf(state) > -1) {
                    outputDiv.innerHTML += state + " is also at higher risk of ";
                    var read = new Object();

                    if (droughtStates.indexOf(state) > -1) {
                        read.drought = true;
                    }
                    if (waterStates.indexOf(state) > -1) {
                        read["water shortages"] = true;
                    }
                    if (wildfireStates.indexOf(state) > -1) {
                        read.wildfire = true;
                    }
                    if (hurricaneStates.indexOf(state) > -1) {
                        read["coastal storms"] = true;
                    }
                    var readArray = Object.keys(read);
                    console.log(readArray);
                    console.log(readArray[0]);
                    if (readArray.length == 1) {
                        outputDiv.innerHTML += readArray[0];
                    } else if (readArray.length == 2) {
                        outputDiv.innerHTML += readArray[0] + " and " + readArray[1];
                    } else if (readArray.length == 3) {
                        outputDiv.innerHTML += readArray[0] + ", " + readArray[1] + " and " + readArray[2];
                    } else if (readArray.length == 4) {
                        outputDiv.innerHTML += readArray[0] + ", " + readArray[1] + ", " + readArray[2] + " and " + readArray[3];
                    }

                    outputDiv.innerHTML += " as the next century unfolds.";
                } else {
                    outputDiv.innerHTML += state + "is also not at high risk for wildfires, drought, coastal storms or water sustainability in the next century.";
                }


                latlngbounds.extend(clickedLocation);
                output_lat.push(clickedLocation.lat());
                output_lng.push(clickedLocation.lng());
                output_f.push((results[0].elevation * 3.2808399).toFixed(3));
                output_m.push(results[0].elevation.toFixed(3));
            } else {
                outputDiv.innerHTML = "No results found";
            }
        } else {
            outputDiv.innerHTML = "Elevation service failed due to: " + status;
        }
    });
}





function submitenter(myfield, e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;
    if (keycode == 13) {
        ftn_quickfind2(document.getElementById('goto').value);
        document.getElementById("goto").focus();
        document.getElementById("goto").select();
        return false;
    } else {
        return true;
    }
}

function ftn_quickfind2(address) {
    document.getElementById("btn_go").value = "Searching";
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            point = results[0].geometry.location;



            getElevation(point);

            map.setCenter(point);
            map.fitBounds(results[0].geometry.viewport);
            document.getElementById("btn_go").value = "Found";
        } else {
            document.getElementById("btn_go").value = "Not Found";
        }
    });
}

function ftn_zoomtofit() {
    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds);
}

function ftn_processaddressupload(str_addresses) {
    lines = str_addresses.split('\n');
    if (lines.length > addresslimit) {
        lines = lines.slice(0, addresslimit);
    }
    cnt = 0;
    nextaddress();
}

function nextaddress() {
    if (cnt >= lines.length) {
        document.getElementById("btn_ok").title = "Complete!";
        ftn_zoomtofit();
        return;
    } else {
        document.getElementById("btn_ok").title = "Processed " + (cnt + 1) + "/" + lines.length;
    }
    ftn_geocodeaddress(lines[cnt], getElevation);
    cnt++;
}


google.maps.event.addDomListener(window, 'load', initialize);
