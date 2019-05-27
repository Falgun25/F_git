#bin/bash

count=$(grep -FR Linux $1 | wc -w )

echo "$count"
