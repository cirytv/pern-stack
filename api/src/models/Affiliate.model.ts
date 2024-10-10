import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({
  tableName: 'affiliates',
})
class Affiliate extends Model {
  @Column({
    type: DataType.CHAR(100),
  })
  name: string

  @Column({
    type: DataType.FLOAT(5, 2),
  })
  price: number

  @Column({
    type: DataType.BOOLEAN,
  })
  personalPhoneNumber: boolean

  @Column({
    type: DataType.CHAR(100),
  })
  rfc: string
}

export default Affiliate
