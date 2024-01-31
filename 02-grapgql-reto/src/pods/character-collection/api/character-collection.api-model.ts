// export interface HotelEntityApi {
//   id: string;
//   type: string;
//   name: string;
//   created: Date;
//   modified: Date;
//   address1: string;
//   airportCode: string;
//   amenityMask: number;
//   city: string;
//   confidenceRating: number;
//   countryCode: string;
//   deepLink: string;
//   highRate: number;
//   hotelId: number;
//   hotelInDestination: boolean;
//   hotelRating: number;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
//   locationDescription: string;
//   lowRate: number;
//   metadata: {
//     path: string;
//   };
//   postalCode: number;
//   propertyCategory: number;
//   proximityDistance: number;
//   proximityUnit: string;
//   rateCurrencyCode: string;
//   shortDescription: string;
//   stateProvinceCode: string;
//   thumbNailUrl: string;
//   tripAdvisorRating: number;
//   tripAdvisorRatingUrl: string;
// }

// export interface CharacterEntityApi {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   gender: string;
//   origin: {
//     name: string;
//     url: string;
//   };
//   location: {
//     name: string;
//     url: string;
//   };
//   image: string;
//   episode: string[];
//   url: string;
//   created: string;
//   bestSentences: string[];
// }

export interface CharacterEntityApi {
  id: number;
  name: string;
  species: string;
  image: string;

}