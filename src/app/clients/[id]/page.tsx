import ClientDetail from '@/features/clients/components/client-detail'

export default function ClientDetailPage({
  params,
}: {
  params: { id: string } //Next.js remplit automatiquement cet objet params en se basant sur le nom du dossier [id]
}) {
  return <ClientDetail id={params.id} />
}
