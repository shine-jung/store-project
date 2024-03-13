import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from '../../application/product/product.service';
import { Product } from '../../domain/product/product';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  // 아래 데코레이터들을 추후 Swagger를 위한 것 입니다.
  //   @HttpCode(200)
  //   @ApiOperation({ summary: '상품 등록' })
  //   @ApiOkResponse()
  async addProduct(
    @Body()
    {
      name,
      description,
      price,
    }: {
      name: string;
      description: string;
      price: number;
    },
  ): Promise<string> {
    return this.productService.addProduct(name, description, price);
  }

  @Get()
  //   @HttpCode(200)
  //   @ApiOperation({ summary: '상품 전체 조회' })
  //   @ApiAuthHeader()
  //   @ApiPage()
  //   @ApiPaginateResponse(NoticeViewModel)
  //   @ApiBadRequestResponseWithDescription({})
  //   @ApiInternalServerErrorResponseWithDescription({})
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
}
