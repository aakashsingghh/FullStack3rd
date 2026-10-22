function convert() {

            let n = parseInt(document.getElementById("num").value);

            document.getElementById("binary").innerHTML =

                "Binary: " + n.toString(2);

            document.getElementById("hexadecimal").innerHTML =

                "Hexadecimal: " + n.toString(16).toUpperCase();

        }