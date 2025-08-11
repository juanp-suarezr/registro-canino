<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="restaurante saludable, restaurantes, salubridad, pereira, acceso internet pereira">
    <meta name="description"
        content="Sitio diseñado para presentar información sobre restaurantes con concepto de salubridad aprobado - servicios de la alcaldía de Pereira">
    <meta name="author" content="M.Sc.&#169; Alcaldía de Pereira">

    <title inertia>Alimentación segura</title>

    <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased overflow-x-hidden">
    @inertia
</body>

</html>
