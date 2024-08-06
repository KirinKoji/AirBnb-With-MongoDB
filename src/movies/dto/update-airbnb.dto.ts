import { CreateAirBnbDto } from "./create-airbnb.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateAirBnbDto extends PartialType(CreateAirBnbDto) {}