import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
  tableName: 'affiliates',
})
class Affiliate extends Model {
  @Default('Local #123')
  @Column({
    type: DataType.STRING(100),
  })
  declare location_number: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare business_name: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare insurance_policy_number: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare location_policy_number: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare owner_name: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare manager_name: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare company_rfc: string

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare affiliation_date: Date

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare affiliation_renewal_date: Date

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare business_name_commercial: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare business_activity: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare specialty_activity: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare city_location: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare neighborhood_location: string

  @Default('default')
  @Column({
    type: DataType.STRING(100),
  })
  declare full_address: string

  @Default('default')
  @Column({
    type: DataType.STRING(5),
  })
  declare postal_code: string

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  declare availability: boolean

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  declare fiscal_certificate_attached: boolean

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  declare affiliation_request_attached: boolean

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  declare affiliation_invoice_attached: boolean

  @Default(0)
  @Column({
    type: DataType.FLOAT(10, 2),
  })
  declare affiliation_payment_amount: number

  @Default('default')
  @Column({
    type: DataType.STRING(255),
  })
  declare google_maps_link: string

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare owner_birthday: Date

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare manager_birthday: Date

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare facebook_page_creation_date: Date

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare instagram_page_creation_date: Date

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare website_creation_date: Date

  @Default('default')
  @Column({
    type: DataType.STRING(15),
  })
  declare business_phone: string

  @Default('default')
  @Column({
    type: DataType.STRING(15),
  })
  declare manager_phone: string

  @Default('default')
  @Column({
    type: DataType.STRING(15),
  })
  declare owner_cell_phone: string

  @Default('default')
  @Column({
    type: DataType.STRING(255),
  })
  declare owner_email: string

  @Default('default')
  @Column({
    type: DataType.STRING(255),
  })
  declare manager_email: string
}

export default Affiliate
