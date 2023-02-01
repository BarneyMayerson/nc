<?php

namespace Tests\Feature\User\Settings;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProfileTest extends TestCase
{
    use RefreshDatabase;
    
    /** @test */
    function guest_cannot_visit_profile_page() 
    {
        $this->get('settings/profile')
            ->assertRedirect('login');
    }

    /** @test */
    function authenticated_user_can_visit_profile_page()
    {
        $this->signIn();

        $this->get('settings/profile')
            ->assertOk();
    }

    /** @test */
    function user_can_change_name() {
        $user = User::factory()->create();

        $this->signIn($user);

        $oldName = $user->name;

        $attributes = [
            'name' => 'New Name',
            'email' => $user->email,
        ];

        $this->put('settings/profile', $attributes);

        $this->assertDatabaseHas('users', $attributes);
        $this->assertDatabaseMissing('users', ['name' => $oldName]);
    }

    /** @test */
    function name_must_be_unique() {
        User::factory()->create([
            'name' => 'John Doe',
        ]);

        $this->signIn();

        $attributes = [
            'name' => 'John Doe',
            'email' => auth()->user()->email,
        ];

        $response = $this->put('settings/profile', $attributes);
        $response->assertSessionHasErrors('name');
    }

    /** @test */
    function user_can_change_email_address() {
        $user = User::factory()->create();

        $this->signIn($user);

        $oldEmail = $user->email;

        $attributes = [
            'name' => $user->name,
            'email' => 'new@mail.com',
        ];

        $this->put('settings/profile', $attributes);

        $this->assertDatabaseHas('users', $attributes);
        $this->assertDatabaseMissing('users', ['email' => $oldEmail]);
    }

    /** @test */
    function email_must_be_unique() {
        User::factory()->create([
            'email' => 'JohnDoe@mail.com',
        ]);

        $this->signIn();

        $attributes = [
            'name' => auth()->user()->name,
            'email' => 'JohnDoe@mail.com',
        ];

        $response = $this->put('settings/profile', $attributes);
        $response->assertSessionHasErrors('email');
    }
}
