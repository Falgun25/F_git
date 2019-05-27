#bin/bash

find=$(grep -RE abc* $1)

echo "$find"
