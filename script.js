function calculate(operation) 
    {
        let x = parseFloat(document.getElementById("number1").value);
        let y = parseFloat(document.getElementById("number2").value);

        if (isNaN(x) || isNaN(y))
        {
            alert('Proszę wprowadzić prawidłowe liczby.');
            return;
        }
       
    

    let wynik;
    switch (operation) 
    {
        case "dodawanie":
            wynik = x + y
            break;
        case "odejmowanie":
            wynik = x-y
            break;
        case "mnożenie":
            wynik = x*y
            break;
        case "dziel+nie":
            if(y === 0)
            {
                alert('Nie można dzielić przez zero.');
                return;
            }
            wynik = x / y
            break;
   
    }

    document.getElementById('wynik').textContent = wynik;
}
