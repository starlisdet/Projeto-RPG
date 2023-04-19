<?php

// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "alunofatec";
$dbname = "ProjetoRPG";

// Cria a conexão com o banco de dados
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifica se houve erro na conexão
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Verifica se o formulário de cadastro foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtém os valores do formulário
    $name = $_POST["nome"];
    $email = $_POST["email"];
    $psw = $_POST["senha"];

    // Insere o novo usuário no banco de dados
    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$name', '$email', '$psw')";
    if (mysqli_query($conn, $sql)) {
        echo "Usuário cadastrado com sucesso!";
    } else {
        echo "Erro ao cadastrar usuário: " . mysqli_error($conn);
    }
}

// Lista todos os usuários cadastrados
$sql = "SELECT * FROM usuarios";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // Cria uma tabela HTML para exibir os usuários
    echo "<table>";
    echo "<tr><th>Nome</th><th>E-mail</th><th>Ações</th></tr>";
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row["nome"] . "</td>";
        echo "<td>" . $row["email"] . "</td>";
        echo "<td><a href='editar.php?id=" . $row["id"] . "'>Editar</a> | <a href='excluir.php?id=" . $row["id"] . "'>Excluir</a></td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "Nenhum usuário cadastrado.";
}

// Fecha a conexão com o banco de dados
mysqli_close($conn);

?>