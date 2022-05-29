class Github {
  constructor() {
    this.client_id = '41a94c47566dcf522991';
    this.client_secret = 'b4a03926ad03c6de70d6c6b7da4baf911b6b236e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return {
      /* // profile: profile
      profile,
      // repos: repos
      repos */
      profile: profileData,
      repos: reposData
    }
  }
}