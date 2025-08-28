# Nizam Shan — Portfolio (Next.js)

This is a ready-to-deploy Next.js portfolio for **Nizam Shan**. The project includes:
- A responsive Next.js front page with a Plotly demo chart.
- Tailwind CSS for styling.
- SEO basics (meta tags + JSON-LD).

## Quick start (run locally)

1. Extract the zip and open the folder:
   ```bash
   cd nizam-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the dev server:
   ```bash
   npm run dev
   # then open http://localhost:3000
   ```

## Deploy to Vercel (one-click)

1. If you don't have a Vercel account, sign up at https://vercel.com.
2. Create a new GitHub repo and push these files OR upload the folder to GitHub.
3. In Vercel, choose "Import Project" → select the GitHub repo → Deploy (Vercel auto-detects Next.js).
4. Alternatively, from the project folder you can use the Vercel CLI:
   ```bash
   npm i -g vercel
   vercel
   ```

Once deployed, Vercel will provide a hosted link (e.g. https://nizam-portfolio.vercel.app). I can't deploy it myself from here, but the project is ready.

## Notes & next steps
- Replace `public/avatar-nizam.png` with your AI avatar (I included an example in the zip).
- For production, set up `next/image` optimization and add `next-sitemap` for sitemaps.
- To embed live Grafana panels or stream from InfluxDB, configure secure embeds and API tokens in environment variables.

