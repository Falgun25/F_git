#bin/bash

dir=$1
if [ -d "$dir" ]
then
	filename=$(ls -t $1| head -n 1 )
	echo "$filename"
else
	echo "please enter directory"
fi
	
