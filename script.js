<script>
var inp = document.getElementById("myName");
inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter" ) {
        event.preventDefault();
        document.getElementById("myButton").click();
    }
})

function enterFunction() {
    alert("Welcome " + document.getElementById("myName").value);
}
</script>
