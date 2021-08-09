const dev:boolean =  process.env.NODE_ENV !== 'production';

const rootURL:string = dev ? 'http://localhost:3000' : 'example.com'

export default rootURL;