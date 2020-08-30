<!doctype html>
<html lang="site()->language() ? site()->language()->code()">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="author" content="Barron Webster">
  <meta name="keyword" content="Graphic Designer, Graphic Design, RISD, GD, Typography, Barron, Webster, Barron Webster, Google Creative Lab, Product Design, NYC, Brooklyn, Rhode Island School of Design, Metahaven">
  <meta property="og:image" content="<?php echo kirby()->urls()->assets() ?>/images/me.jpg">

  <!-- <link href="https://fonts.googleapis.com/css?family=Rubik:400,500" rel="stylesheet"> -->
  <?= css('assets/css/index.css') ?>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  
  <script src="https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script>


  <script>
      (function(i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function() {
              (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * new Date();
          a = s.createElement(o),
              m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-41248754-1', 'barronwebster.com');
      ga('send', 'pageview');
  </script>


  <!-- <?php echo js('assets/js/masonry.js') ?> -->
  <!-- <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script> -->
  <!-- <?php echo js('assets/js/site.js') ?> -->


</head>
<body>

    <div class="showcase-caption-hover">
      <h3 class="showcase-title-hover">TEST 123</h3>
    </div>

  <div id="holder">

  <header>
    <div class="grid">

      <?php snippet('menu') ?>

    </div>
  </header>
