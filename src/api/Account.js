import Http from './http'
import http from './http';

export default {
    login(dto) {
        return http
            .post('/login', {
                uid: dto.uid,
                pwd: dto.pwd
            }, {
                adapter: async (config) => {
                    return {
                        data: true
                    }
                }
            })
    }
}