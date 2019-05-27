#bin/bash
x=0
y=0
echo "for loop"
for ((i=0;i<=$1;i++))
do
	echo $i
done

echo "while loop"

while((x < $1)) 
do
	echo $x
	x=$((x+1))
done

echo "untill loop"

until(( y > $1))
do

echo $y
y=$((y+1))
done
