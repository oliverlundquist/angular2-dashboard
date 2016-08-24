ng build --environment=production
aws s3 sync dist/ s3://mystore-api-frontend --acl public-read --delete
