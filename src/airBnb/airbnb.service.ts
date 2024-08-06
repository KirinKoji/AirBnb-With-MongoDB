import { Injectable } from '@nestjs/common';
import { listingsAndReviews, listingsAndReviewsDocument } from './entities/airbnb.schema';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateAirBnbDto } from './dto/create-airbnb.dto';
import { ListQueryAirBnb } from './dto/listing-airbnb.dto';
import { UpdateAirBnbDto } from './dto/update-airbnb.dto';

@Injectable()
export class AirBnbService {
    constructor(@InjectModel(listingsAndReviews.name)
    private readonly airBnbModel: Model<listingsAndReviewsDocument>
)   {}

    create(dto: CreateAirBnbDto): Promise<listingsAndReviews> {
        return this.airBnbModel.create(dto);
    }

    async getListAirBnb(listAirBnbQuery: ListQueryAirBnb): Promise<listingsAndReviews[]> {
        const conditions: FilterQuery<listingsAndReviews> = {};

        const listing_url = listAirBnbQuery.listing_url;
        const name = listAirBnbQuery.name;
        const summary = listAirBnbQuery.summary;
        const space = listAirBnbQuery.space;
        const description = listAirBnbQuery.description;
        const neighborhood_overview = listAirBnbQuery.neighborhood_overview;
        const notes = listAirBnbQuery.notes;
        const transit = listAirBnbQuery.transit;
        const access = listAirBnbQuery.access;
        const interaction = listAirBnbQuery.interaction;
        const house_rules = listAirBnbQuery.house_rules;
        const property_type = listAirBnbQuery.property_type;
        const room_type = listAirBnbQuery.room_type;
        const bed_type = listAirBnbQuery.bed_type;
        const minimum_nights = listAirBnbQuery.minimum_nights;
        const maximum_nights = listAirBnbQuery.maximum_nights;
        const cancellation_policy = listAirBnbQuery.cancellation_policy;
        const last_scraped = listAirBnbQuery.last_scraped;
        const calendar_last_scraped = listAirBnbQuery.calendar_last_scraped;
        const first_review = listAirBnbQuery.first_review;
        const last_review = listAirBnbQuery.last_review;
        const accommodates = listAirBnbQuery.accommodates;
        const bedrooms = listAirBnbQuery.bedrooms;
        const beds = listAirBnbQuery.beds;
        const number_of_reviews = listAirBnbQuery.number_of_reviews;
        const bathrooms = listAirBnbQuery.bathrooms;
        const amenities = listAirBnbQuery.amenities;
        const price = listAirBnbQuery.price;
        const security_deposit = listAirBnbQuery.security_deposit;
        const cleaning_fee = listAirBnbQuery.cleaning_fee;
        const extra_people = listAirBnbQuery.extra_people;
        const guests_included = listAirBnbQuery.guests_included;

        if (listing_url) {
            conditions.listing_url = {
            $regex: listing_url,
            $options: 'i'
            
            }

        if (name) {
            conditions.name = {
                $regex: name,
                $options: 'i'
            }
        }

        if (summary) {
            conditions.summary = {
                $regex: summary,
                $options: 'i'
            }
        }

        if (space) {
            conditions.space = {
                $regex: space,
                $options: 'i'
            }
        }

        if (description) {
            conditions.description = {
                $regex: description,
                $options: 'i'
            }
        }

        if (neighborhood_overview) {
            conditions.neighborhood_overview = {
                $regex: neighborhood_overview,
                $options: 'i'
            }
        }

        if (notes) {
            conditions.notes = {
                $regex: notes,
                $options: 'i'
            }
        }

        if (transit) {
            conditions.transit = {
                $regex: transit,
                $options: 'i'
            }
        }

        if (access) {
            conditions.access = {
                $regex: access,
                $options: 'i'
            }
        }

        if (interaction) {
            conditions.interaction = {
                $regex: interaction,
                $options: 'i'
            }
        }

        if (house_rules) {
            conditions.house_rules = {
                $regex: house_rules,
                $options: 'i'
            }
        }

        if (property_type) {
            conditions.property_type = {
                $regex: property_type,
                $options: 'i'
            }
        }

        if (room_type) {
            conditions.room_type = {
                $regex: room_type,
                $options: 'i'
            }
        }

        if (bed_type) {
            conditions.bed_type = {
                $regex: bed_type,
                $options: 'i'
            }
        }

        if (minimum_nights) {
            conditions.minimum_nights = {
                $regex: minimum_nights,
                $options: 'i'
            }
        }

        if (maximum_nights) {
            conditions.maximum_nights = {
                $regex: maximum_nights,
                $options: 'i'
            }
        }

        if (cancellation_policy) {
            conditions.cancellation_policy = {
                $regex: cancellation_policy,
                $options: 'i'
            }
        }

        if (last_scraped) {
            conditions.last_scraped = {
                $eq: last_scraped
            }
        }

        if (calendar_last_scraped) {
            conditions.calendar_last_scraped = {
                $eq: calendar_last_scraped
            }
        }

        if (first_review) {
            conditions.first_review = {
                $eq: first_review
            }
        }

        if (last_review) {
            conditions.last_review = {
                $eq: last_review
            }
        }

        if (accommodates) {
            conditions.accommodates = {
                $gte: accommodates
            }
        }

        if (bedrooms) {
            conditions.bedrooms = {
                $gte: bedrooms
            }
        }

        if (beds) {
            conditions.beds = {
                $gte: beds
            }
        }
    
        if (number_of_reviews) {
            conditions.number_of_reviews = {
                $gte: number_of_reviews
            }
        }

        if (bathrooms) {
            conditions.bathrooms = {
                $gte: bathrooms
            }
        }

        if (amenities) {
            conditions.amenities = {
                $regex: amenities
            }
        }
        
        if (price) {
            conditions.price = {
                $gte: price
            }
        }

        if (security_deposit) {
            conditions.security_deposit = {
                $gte: security_deposit
            }
        }

        if (cleaning_fee) {
            conditions.cleaning_fee = {
                $gte: cleaning_fee
            }  
        }
        
        if (extra_people) {
            conditions.extra_people = {
                $gte: extra_people
            }
        }

        if (guests_included) {
            conditions.guests_included = {
                $gte: guests_included
            }
        }

        const thumbnail_url = listAirBnbQuery.images?.thumbnail_url;

        if (thumbnail_url) {
            conditions['images.thumbnail_url'] = {
                $regex: thumbnail_url
            }
        }

        const medium_url = listAirBnbQuery.images?.medium_url;

        if (medium_url) {
            conditions['images.medium_url'] = {
                $regex: medium_url
            }
        }

        const picture_url = listAirBnbQuery.images?.picture_url;

        if (picture_url) {
            conditions['images.picture_url'] = {
                $regex: picture_url
            }
        }

        const xl_picture_url = listAirBnbQuery.images?.xl_picture_url;

        if (xl_picture_url) {
            conditions['images.xl_picture_url'] = {
                $regex: xl_picture_url
            }
        }

        const host_id = listAirBnbQuery.host?.host_id;

        if (host_id) {
            conditions['host.host_id'] = {
                $regex: host_id
            }
        }

        const host_url = listAirBnbQuery.host?.host_url;

        if (host_url) {
            conditions['host.host_url'] = {
                $regex: host_url
            }
        }

        const host_name = listAirBnbQuery.host?.host_name;

        if (host_name) {
            conditions['host.host_name'] = {
                $regex: host_name
            }
        }

        const host_location = listAirBnbQuery.host?.host_location;

        if (host_location) {
            conditions['host.host_location'] = {
                $regex: host_location
            }
        }

        const host_about = listAirBnbQuery.host?.host_about;

        if (host_about) {
            conditions['host.host_about'] = {
                $regex: host_about
            }   
        }

        const host_response_time = listAirBnbQuery.host?.host_response_time;

        if (host_response_time) {
            conditions['host.host_response_time'] = {
                $regex: host_response_time
            }   
        }

        const host_thumbnail_url = listAirBnbQuery.host?.host_thumbnail_url;

        if (host_thumbnail_url) {
            conditions['host.host_thumbnail_url'] = {
                $regex: host_thumbnail_url
            }   
        }

        const host_picture_url = listAirBnbQuery.host?.host_picture_url;

        if (host_picture_url) {
            conditions['host.host_picture_url'] = {
                $regex: host_picture_url
            }   
        }

        const host_neighborhood = listAirBnbQuery.host?.host_neighborhood;

        if (host_neighborhood) {
            conditions['host.host_neighborhood'] = {
                $regex: host_neighborhood
            }   
        }

        const host_response_rate = listAirBnbQuery.host?.host_response_rate;

        if (host_response_rate) {
            conditions['host.host_response_rate'] = {
                $regex: host_response_rate
            }   
        }

        const host_is_superhost = listAirBnbQuery.host?.host_is_superhost;

        if (host_is_superhost) {
            conditions['host.host_is_superhost'] = {
                $eq: host_is_superhost
            }
        }

        const host_has_profile_pic = listAirBnbQuery.host?.host_has_profile_pic;

        if (host_has_profile_pic) {
            conditions['host.host_has_profile_pic'] = {
                $eq: host_has_profile_pic
            }
        }

        const host_identity_verified = listAirBnbQuery.host?.host_identity_verified;

        if (host_identity_verified) {
            conditions['host.host_identity_verified'] = {
                $eq: host_identity_verified
            }
        }

        const host_listings_count = listAirBnbQuery.host?.host_listings_count;

        if (host_listings_count) {
            conditions['host.host_listing_count'] = {
                $gte: host_listings_count
            }
        }

        const host_total_listings_count = listAirBnbQuery.host?.host_total_listings_count;

        if (host_total_listings_count) {
            conditions['host.host_total_listings_count'] = {
                $gte: host_total_listings_count
            }
        }

        const host_verifications = listAirBnbQuery.host?.host_verifications;

        if (host_verifications) {
            conditions['host.host_verifications'] = {
                $regex: host_verifications,
                $options: 'i'
            }
        }

        const street = listAirBnbQuery.address?.street;

        if (street) {
            conditions['address.street'] = {
                $regex: street,
                $options: 'i'
            }
        }

        const suburb = listAirBnbQuery.address?.suburb;

        if (suburb) {
            conditions['address.suburb'] = {
                $regex: suburb,
                $options: 'i'
            }
        }

        const government_area = listAirBnbQuery.address?.government_area;

        if (government_area) {
            conditions['address.government_area'] = {
                $regex: government_area,
                $options: 'i'
            }
        }

        const market = listAirBnbQuery.address?.market;

        if (market) {
            conditions['address.market'] = {
                $regex: market,
                $options: 'i'
            }
        }

        const country = listAirBnbQuery.address?.country;

        if (country) {
            conditions['address.country'] = {
                $regex: country,
                $options: 'i'
            }   
        }

        const country_code = listAirBnbQuery.address?.country_code;

        if (country_code) {
            conditions['address.country_code'] = {
                $regex: country_code,
                $options: 'i'
            }   
        }

        const type = listAirBnbQuery.address?.location?.type;

        if (type) {
            conditions['address.location.type'] = {
                $regex: type,
                $options: 'i'
            }
        }

        const coordinates = listAirBnbQuery.address?.location?.coordinates;

        if (coordinates) {
            conditions['address.location.coordinates'] = {
                $gte: coordinates
            }
        }

        const is_location_exact = listAirBnbQuery.address?.location?.is_location_exact;

        if (is_location_exact) {
            conditions['address.location.is_location_exact'] = {
                $eq: is_location_exact
            }
        }

        const availability_30 = listAirBnbQuery.availability?.availability_30;

        if (availability_30) {
            conditions['availability.availability_30'] = {
                $gte: availability_30
            }
        }

        const availability_60 = listAirBnbQuery.availability?.availability_60;

        if (availability_60) {
            conditions['availability.availability_60'] = {
                $gte: availability_60
            }
        }

        const availability_90 = listAirBnbQuery.availability?.availability_90;

        if (availability_90) {
            conditions['availability.availability_90'] = {
                $gte: availability_90
            }
        }

        const availability_365 = listAirBnbQuery.availability?.availability_365;

        if (availability_365) {
            conditions['availability.availability_365'] = {
                $gte: availability_365
            }
        }

        const review_scores_accuracy = listAirBnbQuery.review_scores?.review_scores_accuracy;

        if (review_scores_accuracy) {
            conditions['review_scores.review_scores_accuracy'] = {
                $gte: review_scores_accuracy
            }
        }

        const review_scores_cleanliness = listAirBnbQuery.review_scores?.review_scores_cleanliness;

        if (review_scores_cleanliness) {
            conditions['review_scores.review_scores_cleanliness'] = {
                $gte: review_scores_cleanliness
            }
        }

        const review_scores_checkin = listAirBnbQuery.review_scores?.review_scores_checkin;

        if (review_scores_checkin) {
            conditions['review_scores.review_scores_checkin'] = {
                $gte: review_scores_checkin
            }
        }

        const review_scores_communication = listAirBnbQuery.review_scores?.review_scores_communication;

        if (review_scores_communication) {
            conditions['review_scores.review_scores_communication'] = {
                $gte: review_scores_communication
            }
        }

        const review_scores_location = listAirBnbQuery.review_scores?.review_scores_location;

        if (review_scores_location) {
            conditions['review_scores.review_scores_location'] = {
                $gte: review_scores_location
            }   
        }

        const review_scores_value = listAirBnbQuery.review_scores?.review_scores_value;

        if (review_scores_value) {
            conditions['review_scores.review_scores_value'] = {
                $gte: review_scores_value
            }
        }

        const review_scores_rating = listAirBnbQuery.review_scores?.review_scores_rating;

        if (review_scores_rating) {
            conditions['review_scores.review_scores_rating'] = {
                $gte: review_scores_rating
            }
        }

        const reviews = listAirBnbQuery.reviews;

        if (reviews) {
            conditions['reviews'] = {
                $regex: reviews,
                $options: 'i'
            }
        }

}

        const limit = listAirBnbQuery.limit || 30;
        const offset = listAirBnbQuery.offset || 0;
        return this.airBnbModel.find(conditions, {}, { limit: limit, skip: offset }).exec();
    }   
    

    async getDetailAirBnb(id: string): Promise<listingsAndReviews> {
        return this.airBnbModel.findById(id).exec();
    }

    async updateAirBnb(id: string, updateAirBnbDto: UpdateAirBnbDto): Promise<listingsAndReviews> {
        return this.airBnbModel.findByIdAndUpdate(id, updateAirBnbDto, { new: true }).exec();
    }

    async deleteAirBnb(id: string): Promise<listingsAndReviews> {
        return this.airBnbModel.findByIdAndDelete(id).exec();
    }
}