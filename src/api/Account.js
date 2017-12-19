import Http from './http'
import http from './http';

export default {
    login(dto) {
        return http
            .post('/login', {
                uid: dto.uid,
                pwd: dto.pwd
            }, {
                adapter: (config) => {
                    console.log(dto)
                    return new Promise((rs, rj) => {
                        if (dto.uid == 'admin') {
                            rs({
                                data: true
                            })
                        } else {
                            rj()
                        }
                    })
                }
            })
    }
}