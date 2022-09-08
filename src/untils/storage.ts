import localforage from 'localforage'

class Storage {
  private readonly STORAGE_PREFIX = 'LOCAL_FORAGE::'
  private storage: LocalForage

  public constructor(name: string) {
    this.storage = localforage.createInstance({
      name,
      storeName: `${name}-DB`,
    })
  }

  public async getItem(key: string) {
    try {
      const value = await this.storage.getItem(`${this.STORAGE_PREFIX}${key}`)
      return value
    } catch {
      return null
    }
  }

  public async setItem(key: string, value: any) {
    try {
      await this.storage.setItem(`${this.STORAGE_PREFIX}${key}`, value)
      return true
    } catch {
      return false
    }
  }

  public async removeItem(key: string) {
    try {
      await this.storage.removeItem(`${this.STORAGE_PREFIX}${key}`)
      return true
    } catch {
      return false
    }
  }

  public async reset() {
    await this.storage.clear()
  }
}

export default new Storage('CRA-Template-storage')
