counter=13

for file in img/Rectangle*; do
  mv "$file" "img/catalog-card-item${counter}.jpg"
  counter=$((counter + 1))
done
