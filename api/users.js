import { fakerRU as faker } from '@faker-js/faker';
export default () => ({
    async list({offset, limit}) {
        let arr = []
        for (let i = 0; i < limit; i++) {
          let str = []
          for (let j = 0; j < 24; j++) {
            str.push(faker.number.hex())
          }
          arr.push(
            {
              id: str.join(""),
              balance: Math.ceil(Math.random() * 1000),
              cashbackPercent: Math.ceil(Math.random() * 31),
              city: {id: faker.location.zipCode(), title: faker.location.city()},
              isBlocked: false,
              lastSave: new Date(2023, Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 24)).getTime(),
              lastSpend: new Date(2023, Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 24)).getTime(),
              lastVisit: new Date(2023, Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 24)).getTime(),
              name: faker.person.firstName(),
              phone:`+7 ${faker.phone.number()}`,
              role: faker.person.jobArea(),
              saveCount: Math.ceil(Math.random() * 100),
              saveTotal: Math.ceil(Math.random() * 1000),
              spendCount: Math.ceil(Math.random() * 100),
              spendTotal: Math.ceil(Math.random() * 1000),
              updatedAt: new Date(2023, Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 24)).getTime(),
              createdAt: new Date(2023, Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 30), Math.ceil(Math.random() * 24)).getTime()
            }
          )
        }
        return new Promise( (resolve) => {
          setTimeout(() => {
            resolve(JSON.stringify(arr))
          }, offset)
        })
    }
})


