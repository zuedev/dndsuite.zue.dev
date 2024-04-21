import { execSync } from "child_process";

/**
 * Returns the current git commit hash of the project.
 *
 * @returns {Promise<string>} The current git commit hash of the project.
 */
export default async function getGitCommitHash() {
  return execSync("git rev-parse HEAD").toString().trim();
}
