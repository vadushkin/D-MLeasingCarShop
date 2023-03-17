counter=5

for file in Rectangle*; do
  mv "$file" "catalog-card-item${counter}.jpg"
  counter=$((counter + 1))
done
