import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onRemove }) {
    return <div className="toy-list grid j-center main-layout">
        {toys.map(toy => {
            return <ToyPreview key={toy._id} toy={toy} onRemove={onRemove} />
        })}
    </div>
}