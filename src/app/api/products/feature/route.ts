import data from '../data.json'

export async function GET() {
  const featredProducts = data.products.filter((product) => product.featured)

  return Response.json(featredProducts)
}
