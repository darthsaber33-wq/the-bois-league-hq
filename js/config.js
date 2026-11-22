
/* The Bois League — Website Configuration */

window.LEAGUE_CONFIG = {
  currentSeason: 2026,

  get seasonHome() {
    return "/seasons/" + this.currentSeason + "/";
  },

  get standings() {
    return this.seasonHome + "standings.html";
  },

  get matchups() {
    return this.seasonHome + "matchups.html";
  },

  get rankings() {
    return this.seasonHome + "power-rankings.html";
  },

  get gotw() {
    return this.seasonHome + "gotw.html";
  },

  get playoffs() {
    return this.seasonHome + "playoffs.html";
  },
  get recaps() {
  return this.seasonHome + "recaps.html";
},

  franchises: "/franchises/"
};
