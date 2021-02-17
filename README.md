HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script src="fibonacci.js"></script>
	<div class="container">
		<div class="panel panel-primary">
			<div class="panel-heading"><h1>Serie Fibonacci</h1>
			</div>
			<div class="panel-body">
				<input id="num" name="numero" class="form-control" type="number" >
				<button class="btn btn-success" onclick="fibonacci()">Generar Numeros</button>
			</div>
			<div class="panel-footer" id="resultado" style="word-wrap: break-word;"></div>
		</div>	
	</div>
</body>
</html>



