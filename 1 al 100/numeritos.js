var numeros =100
var divisible = false;
for (var z = 1; z <= 100; z++) 
{
    divisible = false
    if (z  % 3==0) 
    {
        document.write("Fizz");
        divisible = true;
    }
    if (z % 5==0) 
    {
        document.write("Buzz");
        divisible = true;
    }

    if(!divisible)
    {
        document.write(z);
    }
    document.write ("<br />")
}

