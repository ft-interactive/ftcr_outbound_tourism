export default () => ({ // eslint-disable-line

  // link file UUID
  id: '',

  // canonical URL of the published page
  // https://ig.ft.com/starterkitjune get filled in by the ./configure script
  url: 'http://ig.ft.com/ftcr/chinese-outbound-tourism',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Exploring the travel habits of Chinese tourists',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'This interactive tool allows you to analyse the travel habits of Chinese tourists, drawing on the dataset of our latest annual survey. Using the drop-down lists below, compare and contrast where tourists went, how much they spent and on what, based on factors such as income, occupation and city of residence.',

  topic: {
    name: 'FT Confidential Research',
    url: 'https://www.ft.com/ft-confidential-research',
  },

  relatedArticle: {
    text: 'Related articles »',
    url: 'https://www.ft.com/ft-confidential-research',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'FTCR', url: 'https://www.ft.com/ft-confidential-research' },
    // url: '/foo/bar' },
    // { name: 'David Wilder' },
  ],

  // Appears in the HTML <title>
  title: 'Exploring the travel habits of Chinese tourists',

  // meta data
  description: 'This interactive tool allows you to analyse the travel habits of Chinese tourists, drawing on the dataset of our latest annual survey',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'], // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the General social options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  //ADVERTISING
  ads: {
    // ad unit hierarchy makes ads more granular. Start with ft.com and /companies /markets /world as appropriate to your story
    gptAdunit: 'ft.com/companies/european',
    // granular targeting is optional and will be specified by the ads team
    dftTargeting: '',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
