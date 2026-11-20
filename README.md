# Salman Raza — Academic Website

A Jekyll academic portfolio designed for GitHub Pages, using the supported Minima theme with a custom visual layer.

## 1. Create the repository

Your GitHub username is `Rosh-2023`, so the repository for your main user site must be:

`Rosh-2023.github.io`

Keep it **Public**. Upload the contents of this folder to the repository root (not the enclosing folder).

## 2. Publish with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`.
5. Save and wait for the deployment to finish.

Your site address will be:

https://rosh-2023.github.io/

The first deployment can take several minutes.

## 3. Personalise before sharing

Search the files for `Add`, `your.email@example.com`, and `#` placeholder links. In particular:

- `contact.md`: add your professional email and profile links.
- `cv.md`: upload your PDF to `assets/documents/cv.pdf` and verify all CV details.
- `thesis.md`: add the final thesis PDF and institutional record.
- `publications.md`: verify the final bibliographic record and add the DOI/publisher URL.
- `research.md`: add selected figures and project links.
- `projects.md` and `teaching.md`: replace example GitHub profile links with the exact repository URLs as you publish tutorials.

The hero uses a NASA image URL as a remote background. If it does not load in your browser, replace the image URL in `assets/css/style.scss` with a downloaded image you are permitted to reuse. Credit NASA imagery where appropriate.

## 4. Add a tutorial

A good first tutorial is `How satellite altimetry works`. Create a separate page such as `teaching/altimetry.md`, add it to the teaching page, and include:
- a short physical explanation;
- a labelled diagram and equations;
- a runnable Python notebook;
- a link to the notebook repository;
- references and further reading.

## 5. Local preview (optional)

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` in your browser.

## 6. Important notes

- Do not commit passwords, API keys, private data or unpublished confidential research.
- GitHub Pages is a static hosting service. It can host HTML, CSS, JavaScript, PDFs and images, but not run a Python server.
- Google Colab and Binder can be linked for interactive Python notebooks.
- The free `github.io` address is sufficient to start; a custom domain can be connected later.
