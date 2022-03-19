array = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
done = false;
while (!done) 
{
    done = true;
    for (i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
            done = false;
            tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = tmp;
        }
    }
}
console.log(array);
