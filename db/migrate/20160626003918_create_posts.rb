class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :type_of
      t.text :content
      t.text :title
      t.text :code
      t.text :link
      t.text :language
      t.references :user, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
