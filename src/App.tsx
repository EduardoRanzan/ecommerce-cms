import { Route, Routes } from "react-router-dom"
import { CategoryLayout } from "./cases/categories/components/category-layout"
import { CategoryForm } from "./cases/categories/components/category-form"
import { BrandLayout } from "./cases/brands/components/brand-layout"
import { BrandForm } from "./cases/brands/components/brand-form"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <div className="wrapper">
      <main>
        <Routes>
          <Route path="/categories" element={<CategoryLayout/>}>
            <Route path="new" element={<CategoryForm />} />
            <Route path=":id" element={<CategoryForm />} />
          </Route>
          <Route path="/brands" element={<BrandLayout/>}>
            <Route path="new" element={<BrandForm />} />
            <Route path=":id" element={<BrandForm />} />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
