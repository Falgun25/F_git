#bin/bash

q=""
countr=0
d=4
fun(){
	#list= ls $1 
	#echo "$list"	
	
	for file in "$1"/*
	do
		
		if [ -d  "$file" ]
	       	then
			
                        echo -ne "\b\b\b\b|"

                        echo -ne "__"
			n="$file"
			echo "$n"
			q+="\t"
			
			
			
                        echo -ne "$q|"

			echo -ne "__"
			fun "$file"
			q+="\b\b\b\b\b\b\b\b\b\b"
			
			 echo -ne "$q|"
			
                        echo -ne "__"
			
			
		else
			echo "$file"
			echo -e "\n"
		fi
	done
}

fun "$1"
