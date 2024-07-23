module.exports = ({content,req}) => {


    return`
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
        <div>
            <a class="navbar-brand" href="/admin/orders">Orders</a>
            <a class="navbar-brand" href="/">Home</a>
        </div>
            </button>

                <div class="btn-group dropstart">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/admin/products/new">Add new product</a></li>
                        <li><a class="dropdown-item" href="/admin/products">Product</a></li>
                        <li><a class="dropdown-item" href="/signin">signin</a></li>
                        <li><a class="dropdown-item" href="/signout">signout</a></li>
                    </ul>
                </div>
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