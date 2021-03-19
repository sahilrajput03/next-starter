## Use below command to start with next.js

```bash
git clone https://github.com/sahilrajput03/next-starter/tree/main
cd next-starter
rm -rf .git
npm i
npm run dev #Or use simply `nd`.
```

### Make demo request to backend

```bash
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"os": "pop os", "email": "sahilrajput03@gmail.com"}' \
  http://localhost:3000/api/hello
# Backend api will respond by appending name property to the body you send to the api. Yikes!
```

### Use below commands

- nd: npm run dev
- ns: npm start
- nb: npm run build

### Short details:

- dev - Runs next dev which starts Next.js in development mode
- build - Runs next build which builds the application for production usage
- start - Runs next start which starts a Next.js production server
