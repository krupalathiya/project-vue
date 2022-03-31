import http from '../http.common'
class ProductDataService {
  getAll () {
    return http.get('/Product')
  }
}
export default new ProductDataService()
