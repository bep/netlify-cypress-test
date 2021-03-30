Just a minimal repo to set up [Cypress](https://www.cypress.io/) integration tests running in a GitHub Action after a successful [Netlify](https://www.netlify.com/) preview build.

Why not run these tests on Netlify, you ask? I tried, but there are several reasons why running these on GitHub is better:

* There are no (known) way to run tests on Netlify on the published site _and_ fail the build.
* Setting up the Cypress environment can be a hassle -- there are ready-to-use GitHub Actions with matching Docker containers for this.
* GitHub builds are cheaper (or … more free)

See the GitHub Action [workflow file](.github/workflows/cypress.yml). This workflow triggers on Pull Request status updates from Netlify, runs the Cypress tests when the Netlify preview is ready, and updates the PR's test status to be one of `pending`, `failure` or `success`.

The workflow can be tested with [Ack](https://github.com/nektos/act) locally:

```bash
npm -g install static-server
static-server public
act status -e test-event.json
```

