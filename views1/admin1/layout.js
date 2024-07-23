module.exports = ({content,req}) => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="/css/main.css" rel="stylesheet"> 


    <title>Ecomerce</title>

</head> 

    <nav class="navbar fixed-top bg-body-tertiary MyNavbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="/admin/products/new">Add new product</a>
            <a class="navbar-brand" href="/admin/products">Product</a>
            <a class="navbar-brand" href="/signin">signin</a>
            <a class="navbar-brand" href="/signup">signup</a>
            <a class="navbar-brand" href="/signout">signout</a>
            <a class="navbar-brand" href="/">Home</a>
        </div>
    </nav>

    <body>
       
        <div class= "container">


            ${content}
        </div>
        
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    </body>
</html>
    `
};