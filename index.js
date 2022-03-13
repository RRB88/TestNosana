<!DOCTYPE html>
<html lang="ru" >

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <meta name="theme-color" content="#ffffff">

          <meta name="centrifugo-url" content="wss://proglib.io/centrifugo/connection/websocket">
      <meta name="centrifugo-user" content="">
      <meta name="centrifugo-token" content="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIiLCJleHAiOjE2NDcyNTAyMzB9.qm__KIJVTjqLIDiD4_1kyusWV4_WxnattOwMZMFoRQ4">
    
          	
			
		<title>JS-гайд: основные концепции JavaScript с примерами кода</title>
	<meta name="description" content="Гайд по принципу Парето: 20% языка, которые нужны вам в 80% случаев. Только основные концепции JavaScript с примерами кода."/>
	<meta name="keywords" content=""/>

		<meta property="og:locale" content="ru_RU">
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="https://proglib.io/p/js-guide"/>
	<meta property="og:site_name" content="Библиотека программиста">
	<meta property="og:title" content="JS-гайд: основные концепции JavaScript с примерами кода"/>
	<meta property="og:description" content="Гайд по принципу Парето: 20% языка, которые нужны вам в 80% случаев. Только основные концепции JavaScript с примерами кода."/>
	<meta property="og:updated_time" content=""/>
	<meta property="og:image" content="https://media.proglib.io/wp-uploads/2018/11/1_hLSiwh3HW9Pqw0M3gLEMOg.png"/>

		<meta name="twitter:card" content="summary"/>
	<meta name="twitter:title" content="JS-гайд: основные концепции JavaScript с примерами кода"/>
	<meta name="twitter:description" content="Гайд по принципу Парето: 20% языка, которые нужны вам в 80% случаев. Только основные концепции JavaScript с примерами кода."/>

		<meta itemprop="name" content="JS-гайд: основные концепции JavaScript с примерами кода">
	<meta itemprop="description" content="Гайд по принципу Парето: 20% языка, которые нужны вам в 80% случаев. Только основные концепции JavaScript с примерами кода.">

	<meta name="robots" content="max-image-preview:large">

	
			<link rel="amphtml" href="/p/js-guide/amp/">
	

    
          	<link rel="apple-touch-icon" sizes="180x180" href="https://static.proglib.io/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://static.proglib.io/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://static.proglib.io/favicon/favicon-16x16.png">
	<link rel="manifest" href="https://static.proglib.io/favicon/site.webmanifest">
	<link rel="mask-icon" href="https://static.proglib.io/favicon/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="https://static.proglib.io/favicon/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="https://static.proglib.io/favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

    
    <meta name="yandex-verification" content="f2bd6cbab1d712ed"/>
    
    <meta name="verify-admitad" content="84fc729238" />

        <link rel="stylesheet" href="https://static.proglib.io/assets/service.min.css?e3e5173f" />
    <link rel="stylesheet" href="https://static.proglib.io/assets/main.min.css?e3e5173f" />

                <style>
        :root.dark {
          --page-bg: #1e222d;
          --header-bg: #121212;
          --footer-bg: #121212;
          
          --block-bg: #333a4d;
          --text-color: #fff;
          --accent-color: #378FF6;
          --black-color: #b6c7dd;
          --light-block-bg: #434a5d;
          --vs-text-color: #000;
          --block-shadow-color: #171719;
          --block-hover-color: #737aad;

          --my-proglib-bg: var(--page-bg);
          --profile-sidebar-bg: var(--block-bg);

          --button-bg: var(--accent-color);
          --button-white-bg: var(--header-bg);

          --card-pinned-bg: #343f6d;

          --live-bg: #31384a;
          --live-block-shadow: none;

          --modal-bg: var(--page-bg);
          --dropdown-bg: var(--page-bg);
          --toast-bg: var(--page-bg);

          --light-border-color: #8990a3;

          --window-bg: #333a4d;
          --window-second-bg: #2a3040;
          --window-border-color: #121212;

          --mac-window-bg: #36363f;
          --mac-window-border: #121214;
          --mac-window-header: var(--page-bg);
          --mac-window-shadow-color: #121214;

          --alert-primary-bg: rgba(30, 34, 45, .6);
          --alert-primary-color: #fff;
          --smart-editor-color: #f0f0f0;

          --alert-warning-color: #FFBE71;
          --alert-warning-bg: rgba(255, 190, 113, 0.2);
          --search-hover-color: var(--page-bg);

          --btn-light-hover: rgba(255, 255, 255, .1);

          --ui-border-hover: #7f7f7f;
          --ui-background-disabled: rgb(41, 48, 67);
        }

        .dark ::selection {
          background: var(--page-bg);
        }
