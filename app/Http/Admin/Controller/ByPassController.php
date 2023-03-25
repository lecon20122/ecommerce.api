<?php

namespace App\Http\Admin\Controller;

use App\Domain\Admin\Services\ByPassService;
use App\Http\Admin\Requests\StoreByPassRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class ByPassController extends BaseController
{

    public function __construct(protected ByPassService $byPassService)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): \Illuminate\Http\RedirectResponse | \Inertia\Response
    {
        try {
            return Inertia::render('Dashboard/bypasses/bypasses-index', [
                'bypasses' => $this->byPassService->getByPasses()
            ]);
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndRedirectBack(
                $exception->getMessage(),
                __CLASS__,
                __FUNCTION__,
                $code ?? 400
            );
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreByPassRequest $request): \Illuminate\Http\RedirectResponse
    {
        try {
            $this->byPassService->createByPass($request->validated());
            return $this->redirectBackWithMessage('ByPass created successfully');
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndRedirectBack(
                $exception->getMessage(),
                __CLASS__,
                __FUNCTION__,
                $code ?? 400
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): \Illuminate\Http\RedirectResponse
    {
        try {
            $this->byPassService->deleteByPass($id);
            return $this->redirectBackWithMessage('ByPass deleted successfully');
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndRedirectBack(
                $exception->getMessage(),
                __CLASS__,
                __FUNCTION__,
                $code ?? 400
            );
        }
    }
}
