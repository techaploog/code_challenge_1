import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateBlogPostDto {
  @IsInt()
  @IsNotEmpty({ message: "Community ID is required" })
  com_id: number;

  @IsString()
  @MinLength(1, { message: "Title must not be empty" })
  title: string;

  @IsString()
  @MinLength(1, { message: "Details must not be empty" })
  details: string;
}

export class UpdateBlogPostDto {
  @IsString()
  @MinLength(1, { message: "Title must not be empty" })
  title: string;

  @IsString()
  @MinLength(1, { message: "Details must not be empty" })
  details: string;
}
