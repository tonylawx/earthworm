import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: ' 用户名不能为空' })
  @Length(2, 20, { message: '用户名长度为2-20位' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: '手机号码不能为空' })
  @Length(6, 20, { message: '手机号码长度应在6到20位之间' })
  phone: string;

  @ApiProperty()
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 20, { message: '密码长度为6-20位' })
  password: string;

  @ApiProperty()
  @IsString({ message: 'GitHub访问令牌必须是一个字符串' })
  accessToken: string; // 新增GitHub访问令牌

  @ApiProperty()
  @IsString({ message: 'GitHub刷新令牌必须是一个字符串' })
  refreshToken: string; // 新增GitHub刷新令牌

  @ApiProperty()
  @IsString({ message: 'GitHub用户ID必须是一个字符串' })
  githubId: string; // 新增GitHub用户ID

  @ApiProperty()
  @IsString({ message: 'GitHub用户名必须是一个字符串' })
  githubUsername: string; // 新增GitHub用户名
}

export class FindUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: '手机号码不能为空' })
  @Length(6, 20, { message: '手机号码长度应在6到20位之间' })
  phone: string;

  @ApiProperty()
  @IsString({ message: 'GitHub用户ID必须是一个字符串' })
  githubId: string; // 新增可选的GitHub用户ID
}
