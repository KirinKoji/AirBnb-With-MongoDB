import { IsArray, IsDate, IsNumber, IsString } from "class-validator";

export class CreateAirBnbDto {

    @IsString()
    listing_url: string;

    @IsString()
    name: string;

    @IsString()
    summary: string;

    @IsString()
    space: string;

    @IsString()
    description: string;

    @IsString()
    neighborhood_overview: string;

    @IsString()
    notes: string;

    @IsString()
    transit: string;

    @IsString()
    access: string;

    @IsString()
    interaction: string;

    @IsString()
    house_rules: string;

    @IsString()
    property_type: string;
    
    @IsString()
    room_type: string;

    @IsString()
    bed_type: string;

    @IsString()
    minimum_nights: string;

    @IsString()
    maximum_nights: string;

    @IsString()
    cancellation_policy: string;

    @IsDate()
    last_scraped: Date;

    @IsDate()
    calendar_last_scraped: Date;

    @IsDate()
    first_review: Date;

    @IsDate()
    last_review: Date;

    @IsNumber()
    accommodates: number;

    @IsNumber()
    bedrooms: number;

    @IsNumber()
    beds: number;

    @IsNumber()
    number_of_reviews: number;

    @IsNumber()
    bathrooms: number;

    @IsArray()
    amenities: string[];

    @IsNumber()
    price: number;

    @IsNumber()
    security_deposit: number;

    @IsNumber()
    cleaning_fee: number;

    @IsNumber()
    extra_people: number;

    @IsNumber()
    guests_included: number;

    images: {
        thumbnail_url: string;
        medium_url: string;
        picture_url: string;
        xl_picture_url: string;
    }

    host: {
        host_id: string;
        host_url: string;
        host_name: string;
        host_location: string;
        host_about: string;
        host_response_time: string;
        host_thumbnail_url: string;
        host_picture_url: string;
        host_neighborhood: string;
        host_response_rate: string;
        host_is_superhost: boolean;
        host_has_profile_pic: boolean;
        host_identity_verified: boolean;
        host_listing_count: number;
        host_total_listings_count: number;
        host_verifications: string[];
    }

    address: {
        street: string;
        suburb: string;
        government_area: string;
        market: string;
        country: string;
        country_code: string;
        location :{
            type: string;
            coordinates: number[];
            is_location_exact: boolean;
        }
    }

    availability: {
        availability_30: number;
        availability_60: number;
        availability_90: number;
        availability_365: number;
    }

    review_scores: {
        review_scores_accuracy: number;
        review_scores_cleanliness: number;
        review_scores_checkin: number;
        review_scores_communication: number;
        review_scores_location: number;
        review_scores_value: number;
        review_scores_rating: number;
    }

    reviews: [ 
        {
            date: Date;
            listing_id: string;
            reviewer_id: string;
            reviewer_name: string;
            comments: string;
        }
    ]

}