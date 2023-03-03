import moment from 'moment';

const fakeListings = [{
    id: '23af885d-336f-467d-bcba-19c9daec37e8',
    title: 'Toddlers balance bike, trike and potty.',
    description: 'Strider balance bike, tricycle and potty. All in great condition!',
    describedAt: moment().subtract(1, 'day').toISOString(),
    primaryImageUrl: 'https://us1-photo.nextdoor.com/post_photos/09/cb/09cbb6eb9f484760674824a6bd013b9c.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max',
    pickupStatus: 'available',
    imageUrls: [
      'https://us1-photo.nextdoor.com/post_photos/09/cb/09cbb6eb9f484760674824a6bd013b9c.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max',
      'https://us1-photo.nextdoor.com/post_photos/81/b4/81b47f258bda7bc2ca30bb131926418a.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max',
      'https://us1-photo.nextdoor.com/post_photos/9b/63/9b631cfcaf22a1facfc2534c9eb94599.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max',
      'https://us1-photo.nextdoor.com/post_photos/15/52/1552799266860fa2d48d8bb2a4d3c2ed.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max',
    ],
    verifiedAt: moment().subtract(23, 'minutes').toISOString(),
    user: {
      name: 'Ish N',
      hometownCity: 'Rockaway Beach',
      hometownState: 'CA',
      verified: false,
      avatar: 'https://us1-photo.nextdoor.com/user_photos/44/b8/44b84b6f70a518e932ce0bc699129bd2.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=1&resize_type=resize',
      location: {
        lat: '',
        lon: '',
      },
      exchangesCount: 5,
    },
    allowMessaging: true, // TODO: configure listing form: toggle, 'Allow messages'
    questions: [
      { prompt: 'What is the condition?', reply: 'It is used but sturdy and still works well. However, there is a crack near the base of the potty. It is still functional even with it.' },
      { prompt: 'I have a 2-year-old. What ages can ride this trike? I understand that there are no absolute ages to use this, but what is recommended?', reply: 'Recommended for ages 1-3.' },
      { prompt: 'What is the material?', reply: 'Plastic' },
      { prompt: 'How often has this been used?', reply: 'I am not sure.' },
    ],
    receivedAddressCount: 3,
  }];

export default fakeListings;
