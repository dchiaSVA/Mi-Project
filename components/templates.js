/* ── Section template functions ── */

window.Components = {

  /**
   * renderHero(data)
   * data: {
   *   title:    string,
   *   subtitle: string,
   *   meta: [{ label: string, values: string[] }]
   * }
   */
  renderHero: function (data) {
    var metaCols = data.meta.map(function (col) {
      var values = col.values.map(function (v) {
        return '<span class="hero__meta-value">' + v + '</span>';
      }).join('');
      return (
        '<div class="hero__meta-col">' +
          '<span class="hero__meta-label">' + col.label + '</span>' +
          values +
        '</div>'
      );
    }).join('');

    return (
      '<section class="hero">' +
        '<h1 class="hero__title">' + data.title + '</h1>' +
        '<h2 class="hero__subtitle">' + data.subtitle + '</h2>' +
        '<div class="hero__meta">' + metaCols + '</div>' +
      '</section>'
    );
  },

  /**
   * renderHeroImage(data)
   * data: {
   *   src: string,
   *   alt: string
   * }
   */
  renderHeroImage: function (data) {
    return '<img class="hero__image" src="' + data.src + '" alt="' + data.alt + '">';
  },

  /**
   * renderOverview(data)
   * data: {
   *   lead: string,  (may contain inline HTML)
   *   cols: [{ heading: string, body: string }]
   * }
   */
  renderOverview: function (data) {
    var cols = data.cols.map(function (col) {
      return (
        '<div class="overview__col">' +
          '<h3 class="overview__col-heading">' + col.heading + '</h3>' +
          '<p class="overview__col-body">' + col.body + '</p>' +
        '</div>'
      );
    }).join('');

    var lead = data.lead
      ? '<p class="overview__lead">' + data.lead + '</p>'
      : '';

    var idAttr = data.id ? ' id="' + data.id + '"' : '';

    return (
      '<section class="overview"' + idAttr + '>' +
        '<div class="overview__inner">' +
          lead +
          '<div class="overview__cols">' + cols + '</div>' +
        '</div>' +
      '</section>'
    );
  },

  /**
   * renderPullQuote(data)
   * data: {
   *   text: string
   * }
   */
  renderPullQuote: function (data) {
    return (
      '<div class="pull-quote-band">' +
        '<div class="pull-quote-band__inner">' +
          '<p class="pull-quote-band__text">' + data.text + '</p>' +
        '</div>' +
      '</div>'
    );
  }

};
