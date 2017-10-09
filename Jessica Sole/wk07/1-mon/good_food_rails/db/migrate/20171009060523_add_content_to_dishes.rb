class AddContentToDishes < ActiveRecord::Migration[5.1]
  def change
    add_column :dishes, :content, :text
  end
end
